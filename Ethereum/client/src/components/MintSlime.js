import { Button } from "@chakra-ui/button";
import {BsHammer} from "react-icons/bs"
import React from "react";

function MintSlime() {
    function mint(e) {
        e.preventDefault();
        console.log("begging mint")
    }

    return (
        <div className="Mintbutton">
            <Button onClick = {mint}
            leftIcon = {<BsHammer/>}
            colorScheme = 'teal'
            size = 'lg'
            >
                Mint Slime
            </Button>
        </div>
    );
}

export default MintSlime;