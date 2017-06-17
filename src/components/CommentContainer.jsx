import React from "react";

class CommentContainer extends React.Component {
    render() {
        const img = this.props.isLoading ? <div> <br /> <LoadingSpinner /> </div> :
                    <div id="dangerousHTML" dangerouslySetInnerHTML={{__html: this.props.text}} />
        return (
            <div>
                {img}
            </div>
        );
    }
}

class LoadingSpinner extends React.Component {
    render() {
        return (
            <img src="../../assets/spinner.gif" alt="Spinner" height="42" width="42" />
        );
    }
}

module.exports = CommentContainer;