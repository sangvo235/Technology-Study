/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {

    let startPositionStep = position.map((pos, i) => [pos, ((target - pos) / speed[i])]);
    
    startPositionStep.sort((a,b) => b[0] - a[0]);

    let fleets = 0;
    let leadTime = 0;
    
    for(let i = 0; i < startPositionStep.length; i++) {
        // time/steps left for current car to reach target
        let time = startPositionStep[i][1];

        // we say is the current time taken to complete > then the next time??
        // if yes then add the fleet and assign new time.
        if (time > leadTime) {
            fleets++;
            leadTime = time;
        }
    }

    return fleets;
};

// Time Complexity: O(nlogn)
// Space Complexity: O(n)