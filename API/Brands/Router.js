const app = require('express')
const router = app.Router()
const {getAllBrands, getBrandById , getBrandByName, createBrand, updateBrand, deleteBrand} = require('./Controller')

router.get('/get-all-brands', getAllBrands)
router.get('/get-brand-by-id', getBrandById)
router.get('/get-brand-by-name', getBrandByName)
router.put('/update-brand', updateBrand)
router.delete('/delete-brand/:_id', deleteBrand)
router.post('/create-brand', createBrand)

  module.exports = router