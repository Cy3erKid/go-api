package usercontroller

import "github.com/gin-gonic/gin"

func GetAll(c *gin.Context) {
	c.JSON(200, gin.H{
		"data": "hello",
	})
}

func Register(c *gin.Context) {
	c.JSON(200, gin.H{
		"data": "register",
	})
}

func Login(c *gin.Context) {
	c.JSON(200, gin.H{
		"data": "Login",
	})
}

func GetUserById(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{
		"data": "get user by id -> " + id,
	})
}

func SearchByUserName(c *gin.Context) {
	name := c.Query("fullname")
	c.JSON(200, gin.H{
		"data": "get user by id -> " + name,
	})
}
