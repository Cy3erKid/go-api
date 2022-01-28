package main

import (
	"os"

	"example.com/goapi-v1/configs"
	"example.com/goapi-v1/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

// & = get memory address

func main() {
	router := SetupRouter()
	router.Run(":" + os.Getenv("GO_PORT"))
}

func SetupRouter() *gin.Engine {
	godotenv.Load(".env")

	gin.SetMode(os.Getenv(("GIN_MODE")))

	// connect db
	configs.Connection()

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "PATCH", "DELETE"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
	}))

	apiV1 := router.Group("/v1")
	routes.InitRoutes(apiV1)
	routes.InitUserRoutes(apiV1)

	return router
}
