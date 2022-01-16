package routes

import "github.com/gin-gonic/gin"

func InitRoutes(route *gin.RouterGroup) {
	routeGroup := route.Group("/")
	routeGroup.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"API VERSION": "1.0.0",
		})
	})
}
