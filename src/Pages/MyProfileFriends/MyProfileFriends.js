import { BsThreeDots } from 'react-icons/bs';
import './MyProfileFriends.css'

const MyProfileFriends = () =>
{
    return (
        <div>
            <div>
                <h2>Friends</h2>
            </div>
            <div className='frnd-div'>
                <div className='img-title'>
                    <div>
                        <img src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=" alt="" />
                    </div>
                    <div>
                        <h3>
                            Karim Rahman
                        </h3>
                    </div>
                </div>
                <div>
                    <div className='page-icon-div'>
                        <BsThreeDots className='page-icon' />
                    </div>
                </div>
            </div>
            <div className='frnd-div'>
                <div className='img-title'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                    </div>
                    <div>
                        <h3>
                            Rasel Ahmed
                        </h3>
                    </div>
                </div>
                <div>
                    <div className='page-icon-div'>
                        <BsThreeDots className='page-icon' />
                    </div>
                </div>
            </div>
            <div className='frnd-div'>
                <div className='img-title'>
                    <div>
                        <img src="https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?w=360" alt="" />
                    </div>
                    <div>
                        <h3>
                            Lutfor Rahman
                        </h3>
                    </div>
                </div>
                <div>
                    <div className='page-icon-div'>
                        <BsThreeDots className='page-icon' />
                    </div>
                </div>
            </div>
            <div className='frnd-div'>
                <div className='img-title'>
                    <div>
                        <img src="https://us.123rf.com/450wm/mklrnt/mklrnt1911/mklrnt191104169/mklrnt191104169.jpg?ver=6" alt="" />
                    </div>
                    <div>
                        <h3>
                            Khalil Akbar
                        </h3>
                    </div>
                </div>
                <div>
                    <div className='page-icon-div'>
                        <BsThreeDots className='page-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileFriends;