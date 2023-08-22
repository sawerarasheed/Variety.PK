const app = require('express')
const router = app.Router()
const {getAllCategories, getCategoryById , getCategoryByName, createCategory, updateCategory, deleteCategory} = require('./Controller')

router.get('/get-all-categories', getAllCategories)
router.get('/get-category-by-id', getCategoryById)
router.get('/get-category-by-name', getCategoryByName)
router.put('/update-category', updateCategory)
router.delete('/delete-category', deleteCategory)
router.post('/create-category', createCategory)

  module.exports = router