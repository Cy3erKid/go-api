package usercontroller

import (
	"net/http"

	"example.com/goapi-v1/configs"
	"example.com/goapi-v1/models"
	"example.com/goapi-v1/response"
	"example.com/goapi-v1/utils"
	"github.com/gin-gonic/gin"
)

func GetAll(c *gin.Context) {
	var users []models.User
	configs.DB.Order("id desc").Scopes(utils.Paginate(c)).Find(&users)
	c.JSON(200, gin.H{
		"data": users,
	})
}

func Register(c *gin.Context) {
	var userInput UserEntity
	if err := c.ShouldBindJSON(&userInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user := models.User{
		FullName: userInput.FullName,
		Email:    userInput.Email,
		Password: userInput.Password,
	}

	userExist := configs.DB.Where("email = ?", userInput.Email).Find(&user)
	if userExist.RowsAffected == 1 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Email already exist",
		})
		return
	}

	result := configs.DB.Create(&user)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": result.Error})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"data": "register Success",
	})
}

func Login(c *gin.Context) {
	c.JSON(200, gin.H{
		"data": "Login",
	})
}

func GetUserById(c *gin.Context) {
	id := c.Param("id")
	var user []models.User
	result := configs.DB.First(&user, id)
	totalRow := result.RowsAffected
	if result.RowsAffected < 1 {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "User Not found.",
		})
		return
	}
	data := response.UserResponse{
		PageIndex:   1,
		PageSize:    10,
		SortBy:      "id",
		SortType:    "desc",
		RecordTotal: uint(totalRow),
		Data:        user,
	}
	c.JSON(http.StatusOK, gin.H{
		"data": data,
	})
}

func SearchByUserName(c *gin.Context) {
	name := c.Query("fullname")

	var users []models.User
	result := configs.DB.Where("full_name LIKE ?", "%"+name+"%").Scopes(utils.Paginate(c)).Find(&users)
	totalRow := result.RowsAffected

	if result.Error == nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"results": response.ErrorResponse{
				Error:   true,
				Message: "Something went wrong..",
			},
		})
		return
	}

	if result.RowsAffected < 1 {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "User Not Found",
		})
		return
	}

	data := response.UserResponse{
		PageIndex:   1,
		PageSize:    10,
		SortBy:      "id",
		SortType:    "desc",
		RecordTotal: uint(totalRow),
		Data:        users,
	}

	c.JSON(200, gin.H{
		"results": data,
	})
}
