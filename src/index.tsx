import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { TodoApp } from "./components/TodoApp";

ReactDOM.render(
<div>
    <Hello compiler="Bride" framework="Groom" />
    <TodoApp />
</div>,
    document.getElementById("example")
);