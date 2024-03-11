import React from "react";
import { SplitAc } from "./SplitAc";

function SplitComponent (props) {
    return (
        <>
        <div className="border-box-split-product text-center">
            <span className="border-box-label-split">
                <img src={props.image} className="img-fluid" />
            </span>
            <p className="listing-card-label-paragraph mt-3">
                {props.text}
            </p>
        </div>
        </>
    );
}
export default SplitComponent;