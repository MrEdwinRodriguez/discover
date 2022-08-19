import { Formik, Field, Form} from "formik";
import {Button, FormGroup, Label } from 'reactstrap';
import { useState } from "react";

const BlockCreate = () => {
    const [showSubmit, setShowSubmit] = useState(true);

    // TODO fix onchange of text area.  Set initialstate to false
    const handleChange = (event) => {
        if(event.target.value.length > 0)
            setShowSubmit(true)
        else setShowSubmit(false)
    };

    const handleSubmit = (values) => {
        console.log(values)
        const comment = {
            text: values.commentText,
            date: new Date(Date.now()).toISOString()
        };
        console.log('Comment Object: ', comment);
        // dispatch(postComments(comment));
    };
    return (
        <div className="col-xs-12 col-md-6 col-lg-4 item">
        <div className="timeline-block">
          <div className="panel panel-default share clearfix-xs">
            <div className="panel-heading panel-heading-gray title">
              What&acute;s new
            </div>
            <div className="panel-body">
                <Formik
                    initialValues={{
                        commentText: ''
                    }}
                    onSubmit={handleSubmit}
                    // onChange={handleChange}
                    // validate={validateCommentForm}
                >
                    <Form>
                    <FormGroup>
                        <Field
                            name='commentText'
                            as='textarea'
                            rows='3'
                            className='form-control share-text'
                            placeholder='Share your status...'
                            // onChange={handleChange}
                        />
                    </FormGroup>
                    <div className="panel-footer share-buttons">
                        <a href="#"><i className="fa fa-map-marker"></i></a>
                        <a href="#"><i className="fa fa-photo"></i></a>
                        <a href="#"><i className="fa fa-video-camera"></i></a>
                        { showSubmit ? <Button type="submit" className="btn btn-primary btn-xs pull-right ">Post</Button> : ""}
                    </div>
                    </Form>
                </Formik>
            </div>

          </div>
        </div>
      </div>
    )
  };

  export default BlockCreate;