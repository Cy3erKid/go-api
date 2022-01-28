package usercontroller

import (
	"net/http"

	"example.com/goapi-v1/configs"
	"example.com/goapi-v1/models"
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
	var user models.User
	result := configs.DB.First(&user, id)
	if result.RowsAffected < 1 {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "User Not found.",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data": user,
	})
}

func SearchByUserName(c *gin.Context) {
	name := c.Query("fullname")

	var users []models.User
	result := configs.DB.Where("full_name LIKE ?", "%"+name+"%").Scopes(utils.Paginate(c)).Find(&users)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": result.Error,
		})
		return
	}

	if result.RowsAffected < 1 {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "User Not Found",
		})
		return
	}

	c.JSON(200, gin.H{
		"data": users,
	})
}
