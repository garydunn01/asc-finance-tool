const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/capital-answers', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var capital = req.session.data['how-much-capital-do-you-have']

  // Check whether the variable matches a condition
  if (capital == "More than £23,250"){
    // Send user to next page
    res.redirect('/self-fund')
  } else if (capital == "Between £14,250 and £23,250"){
    // Send user to next page
    res.redirect('/tariff-income')
  } else {
    // Send user to ineligible page
    res.redirect('/financial-support')
  }

})
module.exports = router
