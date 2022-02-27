package routes

import (
	usercontroller "example.com/goapi-v1/controllers/user"
	"example.com/goapi-v1/middlewares"
	"github.com/gin-gonic/gin"
)

func InitUserRoutes(route *gin.RouterGroup) {

	routerGroup := route.Group("/users")
	routerGroup.POST("/register", usercontroller.Register)
	routerGroup.POST("/login", usercontroller.Login)

	routerGroup.Use(middlewares.AuthJWT())
	{
		routerGroup.GET("/all", usercontroller.GetAll)
		routerGroup.GET("/:id", usercontroller.GetUserById)
		routerGroup.GET("/search", usercontroller.SearchByUserName)
		routerGroup.GET("/me", usercontroller.GetProfile)
	}

	// single route middleware
	/**
	routerGroup.GET("/me",middlewares.AuthJWT(), usercontroller.GetProfile)
	*/
}
