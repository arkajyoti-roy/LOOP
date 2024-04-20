import { Box } from "@chakra-ui/react";
import CodeEditor from "./Components/CodeEditor";
import "./App.css";


function App() {
  return (
<div className="comp">
  <br /><br />
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
      </div>
   
  );
}

export default App;
