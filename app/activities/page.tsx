import React from 'react';
import { Funnel } from 'lucide-react';
import activity from '@/data/activity.json';

const Page = () => {
    const todayActivities = activity.today;
    const pastActivities = activity.pastdays;

    return (
        <div>
            <h1 className="flex justify-center text-[40px] mb-[40px]">Activities</h1>

            <div>
                <div className="flex justify-between items-center">
                    <p className="text-[24px]">Today</p>
                    <Funnel />
                </div>
                <div className='mt-4'>
                    {todayActivities.length > 0 ? (
                        todayActivities.map((activity, index) => (
                            <div key={activity.id} className="activity-item pb-2 border border-black/5 rounded-[12px] p-4 shadow">
                                <p>{activity.caption}</p>
                                <p className="text-sm text-gray-500">{activity.time} hours ago</p>
                            </div>
                        ))
                    ) : (
                        <p>No activities for today.</p>
                    )}
                </div>
            </div>

            <div className="mt-[40px]">
                <p className="text-[24px]">Past Days</p>
                <div className='mt-4'>
                    {pastActivities.length > 0 ? (
                        pastActivities.map((activity) => (
                            <div key={activity.id} className="activity-item pb-2 border border-black/5 rounded-[12px] p-4 shadow">
                                <p>{activity.caption}</p>
                                <p className="text-sm text-gray-500">{activity.time} days ago</p>
                            </div>
                        ))
                    ) : (
                        <p>No activities for past days.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;