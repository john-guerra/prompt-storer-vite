import React, { Component } from "react";

import BaseTemplate from "../templates/BaseTemplate";

// class ErrorPage extends Component {
//   render() {
//     return (
//       <div className="App">
//         <BaseTemplate>
//           <h1>Error page not found</h1>
//           <div>
//             I'm so sorry but I lost the page you were looking for. Please try
//             again. written by copilot
//           </div>
//         </BaseTemplate>
//       </div>
//     );
//   }
// }

// export default ErrorPage;
function ErrorPage() {
  return (
    <div className="App">
      <BaseTemplate>
        <h1>Error page not found</h1>
        <div>
          I'm so sorry but I lost the page you were looking for. Please try
          again. written by copilot
        </div>
      </BaseTemplate>
    </div>
  );
}
export default ErrorPage;
