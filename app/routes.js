const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/capital-answers', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var capital = req.session.data['how-much-capital-do-you-have']
  var type = req.session.data['what-type-of-care']
  // Check whether the variable matches a condition
  if (capital == "More than £23,250" && type == "Care at home"){
    // Send user to self-fund.html
    res.redirect('/self-fund')
  } else if (capital == "More than £23,250" && type != "Care at home" ){
    // Send user to /self-fund-residential.html
    res.redirect('/self-fund-residential')
  } else if (capital == "Between £14,250 and £23,250" && type == "Care at home" ){
    // Send user to tariff-income.html
    res.redirect('/tariff-income')
  } else if (capital == "Between £14,250 and £23,250" && type != "Care at home" ){
    // Send user to tariff-income-no-housing.html
    res.redirect('/tariff-income-no-housing')
  } else if (capital == "Between £0 and £14,250" && type == "Care at home" ){
    // Send user to financial-support.html
    res.redirect('/financial-support')
  } else if (capital == "Between £0 and £14,250" && type != "Care at home" ){
    // Send user to financial-support-no-housing.html
    res.redirect('/financial-support-no-housing')
  }
})
module.exports = router
