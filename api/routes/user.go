package routes

import (
	usercontroller "example.com/goapi-v1/controllers/user"
	"github.com/gin-gonic/gin"
)

func InitUserRoutes(route *gin.RouterGroup) {

	routerGroup := route.Group("/users")
	routerGroup.GET("/all", usercontroller.GetAll)
	routerGroup.POST("/register", usercontroller.Register)
	routerGroup.POST("/login", usercontroller.Login)
	routerGroup.GET("/:id", usercontroller.GetUserById)
	routerGroup.GET("/search", usercontroller.SearchByUserName)
}
