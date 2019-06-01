function driversWithRevenueOver(drivers, rev) {
    return drivers.filter(function(driver) { return driver.revenue > rev })
}

function driverNamesWithRevenueOver(drivers, rev) {
    let overRevenues = driversWithRevenueOver(drivers, rev)
    
    return overRevenues.map(function(driver) { return driver.name })
}

function exactMatch(drivers, givenAttributes) {
    let key = Object.keys(givenAttributes)[0]
    let value = givenAttributes[key]

    return drivers.filter(function(driver) { return driver[key] === value })
}

function exactMatchToList(drivers, givenAttributes) {
    let exactMatchName = exactMatch(drivers, givenAttributes)
    
    return exactMatchName.map(function(driver) { return driver.name })
}