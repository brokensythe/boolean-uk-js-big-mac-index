// BIG MAC PRICES
let usBigMacPrice = 5.66
let swissBigMacPrice = 6.50
let ukrainianBigMacPrice = 62.00
let swedishBigMacPrice = 52.88
let turkishBigMacPrice = 14.99
let israeliBigMacPrice = 17.00

// DOLLAR RATES
let swissDollarRate = 1.09
let ukrainianDollarRate = 0.04
let swedishDollarRate = 0.12
let turkishDollarRate = 0.12
let israeliDollarRate = 0.31

// IMPLIED PURCHASING POWER
let swissImpliedPurchasingPower = usBigMacPrice / swissBigMacPrice
let ukrainianImpliedPurchasingPower = usBigMacPrice / ukrainianBigMacPrice
let swedishImpliedPurchasingPower = usBigMacPrice / swedishBigMacPrice
let turkishImpliedPurchasingPower = usBigMacPrice / turkishBigMacPrice
let israeliImpliedPurchasingPower = usBigMacPrice / israeliBigMacPrice

// RELATIVE VALUE TOTAL
let swissRelativeValueTotal = swissDollarRate - swissImpliedPurchasingPower
let ukrainianRelativeValueTotal = ukrainianDollarRate - ukrainianImpliedPurchasingPower
let swedishRelativeValueTotal = swedishDollarRate - swedishImpliedPurchasingPower
let turkishRelativeValueTotal = turkishDollarRate - turkishImpliedPurchasingPower
let israeliRelativeValueTotal = israeliDollarRate - israeliImpliedPurchasingPower

// RELATIVE VALUE PERCENTAGE
let swissRelativeValuePercentage = swissRelativeValueTotal / swissImpliedPurchasingPower * 100
let ukrainianRelativeValuePercentage = ukrainianRelativeValueTotal / ukrainianImpliedPurchasingPower * 100
let swedishRelativeValuePercentage = swedishRelativeValueTotal / swedishImpliedPurchasingPower * 100
let turkishRelativeValuePercentage = turkishRelativeValueTotal / turkishImpliedPurchasingPower * 100
let israeliRelativeValuePercentage = israeliRelativeValueTotal / israeliImpliedPurchasingPower * 100

// STRONGER THAN US DOLLAR
let swissStrongerThanDollar = swissRelativeValueTotal > 0
let ukrainianStrongerThanDollar = ukrainianRelativeValueTotal > 0
let swedishStrongerThanDollar = swedishRelativeValueTotal > 0
let turkishStrongerThanDollar = turkishRelativeValueTotal > 0
let israeliStrongerThanDollar = israeliRelativeValueTotal > 0

// CONSOLE LOGS
console.log("It is: ", swissStrongerThanDollar)