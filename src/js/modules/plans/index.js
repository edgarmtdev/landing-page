'use strict'
import swiper from "../../libs/swiper/swiper.js"

const mainPlans = document.querySelector('.main-plans_section')
const cardPlan = document.querySelector('.card-plan')
const left = document.getElementById('plans-left')
const right = document.getElementById('plans-right')

swiper(mainPlans, cardPlan, right, left)

