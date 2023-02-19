import axios from 'axios';
import { Form, Formik } from 'formik';
import { FaLock } from 'react-icons/fa';
import { GiEarthAsiaOceania } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'
import { API } from '../../Helpers/ConfigAPI';
import "./PublicPrivacyModal.css";



export default function PublicPrivacyModal({ _id, togglePublicPrivacyModal, setPublicPrivacyModal, publicPrivacyModal, setState, options })
{

    return (

        <div className="modal">
            <div onClick={togglePublicPrivacyModal} className="overlay"></div>
            <div className="modal-content">
                <div>
                    <h2>Select audience</h2>
                </div>
                <div className="line-modal"></div>
                <Formik
                    initialValues={{
                        picked: `${options}`,
                    }}
                    onSubmit={(values) =>
                    {
                        console.log(values)

                        const options = {
                            postId: _id,
                            options: values.picked
                        }

                        axios.put(API + `/options/${_id}`,
                            options
                        )
                            .then(res =>
                            {
                                setState(prev => !prev)
                                setPublicPrivacyModal(!publicPrivacyModal)
                            })

                        // await new Promise((r) => setTimeout(r, 500));
                        // alert(JSON.stringify(values, null, 2));
                    }}
                    validate={(values) =>
                    {
                        const error = {}

                        if (!values.picked) {
                            error.picked = ''
                        }

                        return error
                    }}
                >
                    {({ handleChange, handleBlur }) => (
                        <Form>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label className='radio-label'>
                                    <div>
                                        <span className='radio-icon'><GiEarthAsiaOceania /></span>
                                        <span className='text'>Public</span>
                                    </div>
                                    <div><input type="radio" className='picked' name="picked" id="picked" onChange={handleChange} onBlur={handleBlur} value='Public' /></div>
                                </label>
                                <label className='radio-label'>
                                    <div>
                                        <span className='radio-icon'><FaLock /></span>
                                        <span className='text'>Privacy</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="picked" id="picked" onChange={handleChange} onBlur={handleBlur} value='Privacy' />
                                    </div>
                                </label>
                                {/* <div>Picked: {values.picked}</div> */}
                            </div>
                            <div className='button-div'>
                                <button className='btn-cancel' onClick={togglePublicPrivacyModal} type="button">Cancel</button>
                                <button className='btn-done' type="submit">Done</button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="close-modal" onClick={togglePublicPrivacyModal}>
                    <RxCross2 className="icon" />
                </div>
            </div>
        </div>

    );
}