import User from "./User";

/**
 * Player model (user in game)
 */
class Player extends User{
    constructor(data = {}) {
        super();
        this.score = 0;
        this.lastAction = null;
        this.currentRole = null;
        Object.assign(this, data);
    }
}
export default Player;
