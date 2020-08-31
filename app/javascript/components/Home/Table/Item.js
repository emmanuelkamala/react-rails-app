import React from 'react';
import Thumbnail from './Thumbnail';
import styled from 'styled-components';

const Button = styled.a`
    font-weight: bold;
    cursor: pointer;
    diplay: inline-block;
    text-decoration: none;
    border-radius: 0;
    padding: 10px 20px;
    width: 50%;
    font-size: 18px;
    background: #fff;
    box-shadow: 0 0 0 3px #473228,
      -6px 6px #ef5f17,
      -6px 6px 0 3px #473228
`

function Item(props) {
    return (
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Thumbnail />
                            </div>
                            <div className="col-md-8">
                                <div className="pt-4 pb-4">
                                    <h4>{props.title}</h4>
                                    <p>{props.description}</p>
                                    <div className="cta-wrapper">
                                        <Button className="btn cta-btn">Watch this video</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
