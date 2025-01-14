
import '../css/style.css';
import streak_visited from '../assets/streak_visited.png';
import streak_used from '../assets/streak_used.png';
import badge_listdone from '../assets/badge_listdone.png';
import badge_taskdone from '../assets/badge_taskdone.png';
import badge_empty_round from '../assets/badge_empty_round.png';
import badge_shield_empty from '../assets/badge_shield_empty.png';
import badge_firstlistshared from '../assets/badge_firstlistshared.png';
import badge_firstlistcreated from '../assets/badge_firstlistcreated.png';
import badge_5days from '../assets/badge_5days.png';
import badge_bl_autumn from '../assets/badge_bl_autumn.png';
import badge_bl_spring from '../assets/badge_bl_spring.png';
import badge_bl_summer from '../assets/badge_bl_summer.png';
import badge_bl_winter from '../assets/badge_bl_winter.png';
import badge_bl_christmas from '../assets/badge_bl_christmas.png';
import badge_bl_easter from '../assets/badge_bl_easter.png';

// Visual component that displays badges earned by the user
const Badges = () => {
    return (
        <div className='badge-display'>
            <h1>BADGES</h1>

             {/* Section to display streak-related badges */}
            <div className='badge-streak'>
                <h2>Streak</h2>
                <div>
                    <img src={streak_visited} alt='streak badge visited' />
                    <img src={streak_used} alt='streak badge used' />
                </div>
            </div>

            {/* Section to display task-related badges */}
            <div className='badge-tasks'>
                <h2>Tasks</h2>
                <div>
                    <img src={badge_taskdone} alt='badge that counts tasks done' />
                    <img src={badge_listdone} alt='badge that counts lists done' />
                    <img src={badge_empty_round} alt='empty badge' />
                </div>
            </div>

            {/* Section to display bucketlist-related badges */}
            <div className='badge-bucketlists'>
                <h2>Bucketlists</h2>
                <div>
                    <img src={badge_bl_autumn} alt='badge for autumn bucketlist' />
                    <img src={badge_bl_winter} alt='badge for winter bucketlist' />
                    <img src={badge_bl_christmas} alt='badge for christmas bucketlist' />
                    <img src={badge_bl_spring} alt='badge for spring bucketlist' />
                    <img src={badge_bl_easter} alt='badge for easter bucketlist' />
                    <img src={badge_bl_summer} alt='badge for summer bucketlist' />
                </div>
            </div>

            {/* Section to display app usage-related badges */}
            <div className='badge-use'>
                <h2>Use of app</h2>
                <div>
                    <img src={badge_firstlistcreated} alt='badge for first list created' />
                    <img src={badge_firstlistshared} alt='badge for first list shared' />
                    <img src={badge_5days} alt='badge for using app 5 days in a row' />
                    <img src={badge_shield_empty} alt='empty badge' />
                </div>
            </div>
            
        </div>
    );
};

export default Badges;