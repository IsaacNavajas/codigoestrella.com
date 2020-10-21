import React from 'react';




class Loading extends React.Component{

  render(){
    return (
      <div>
        <center>
          <code>

          <div class="spinner-border text-primary Loading" role="status">
            <span class="sr-only">Loading...</span>
          </div>

          </code>
        </center>
      </div>
    );

  }


}

export default Loading;
