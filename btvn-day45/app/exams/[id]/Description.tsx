
import {Context, ProviderI} from "./page";
import {useContext} from "react";

export default function() {

    const injector: ProviderI = useContext(Context)
    const {question} = injector

    return (
        <>
            <h1>description</h1>
            <p>
                {
                    question.description
                }
            </p>
        </>
    )
}