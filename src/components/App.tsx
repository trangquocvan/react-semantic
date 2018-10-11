
import * as React from "react";
import ButtonExampleEmphasisShorthand from './layout/button';
import './App.scss';
export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ButtonExampleEmphasisShorthand />
                    </div>
                </div>
            </div>
        );
    }
}