import slider from "../../libs/slider/slider.js"

const mainPlans = document.querySelector('.main-plans_section')
const cardPlan = document.querySelector('.card-plan')
const left = document.getElementById('plans-left')
const right = document.getElementById('plans-right')

slider(mainPlans, cardPlan, right, left)

