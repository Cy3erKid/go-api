package utils

import (
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func Paginate(c *gin.Context) func(db *gorm.DB) *gorm.DB {
	return func(db *gorm.DB) *gorm.DB {
		page, _ := strconv.Atoi(c.Query("page"))
		if page == 0 {
			page = 1
		}

		pageSize, _ := strconv.Atoi(c.Query("page_size"))
		sort := c.Query("sort")
		var sortWithDirection string

		if sort != "" {
			direction := c.Query("sortDesc")
			if direction != "" {
				if direction == "true" {
					sortWithDirection = sort + " desc"
				} else if direction == "false" {
					sortWithDirection = sort + " asc"
				}
			}
		}

		switch {
		case pageSize > 100:
			pageSize = 100
		case pageSize <= 0:
			pageSize = 10
		}

		offset := (page - 1) * pageSize
		return db.Statement.Order(sortWithDirection).Offset(offset).Limit(pageSize)
	}
}
