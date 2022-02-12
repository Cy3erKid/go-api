package response

import (
	"example.com/goapi-v1/models"
)

type UserResponse struct {
	PageIndex   uint   `json:"page_index"`
	PageSize    uint   `json:"page_size"`
	SortBy      string `json:"sort_by"`
	SortType    string `json:"sort_type"`
	RecordTotal uint   `json:"record_total"`
	Data        []models.User
}
