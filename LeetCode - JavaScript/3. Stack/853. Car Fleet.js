/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // edge case where only one car 
    if (position.length === 1) return 1

    // stats = combine speed to position array
    const stats = position.map((position, index) => ({
        position, 
        speed: speed[index]
    }))

    // sort stats based on position
    stats.sort((a,b) => (a.position - b.position))

    console.log(stats)

    const time = stats.map((x) => {
        return (target - x.position) / x.speed
    })

    console.log(time)

    // the car in front is always the start of the fleet
    let stack = [], count = 1;
    for (let i = time.length - 1; i >= 0; i--) {
        if (stack.length === 0 || stack[0] >= time[i]) {
            stack.push(time[i])
        } else {
            count++
            stack = [time[i]]
        }
    }

    return count
    
};

// Time Complexity: O(NlogN)
// Space Complexity: O(N)