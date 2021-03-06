import React from 'react';
import Badge from "react-bootstrap/Badge";
let marked = require("marked");


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
        this.updateMarkdown = this.updateMarkdown.bind(this);
    }
    updateMarkdown = (event) => {
        this.setState({
            markdown: event.target.value
        });
    }
    render(){
        var inputStyle = {
            width: "400px",
            height: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10px"

        };
        var outputStyle = {
            width: "400px",
            overflow: "auto",
            height: "400px",
            backgroundColor: "#DCDCDC",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10px"
        };

        return (
            <div className="App">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col text-center">
                            <h1>
                                <Badge className="text-align-center" variant="light">
                                    Markdown Previewer
                            </Badge>
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="col text-center">
                                <h2>
                                    <Badge className="text-align-center" variant="secondary">
                                        Markdown Input
                            </Badge>
                                </h2>
                            </div>
                            <div className="mark-input" style={inputStyle}>
                                <textarea className="input" style={inputStyle} value={this.state.markdown} onChange={this.updateMarkdown}></textarea>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="col text-center">
                                <h2>
                                    <Badge className="text-align-center" variant="secondary">
                                        Previewer
                            </Badge>
                                </h2>
                            </div>
                            <div style={outputStyle} dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default App;
