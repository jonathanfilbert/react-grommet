import React, { Component } from "react";
// Importing Grommet
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  ResponsiveContext,
  Layer
} from "grommet";
import { Menu, FormClose } from "grommet-icons";
import "./App.css";

// Custom theme
const themeone = {
  global: {
    colors: {
      warnakustom: "#7D4CDB"
    },
    font: {
      family: "Roboto",
      size: "24px",
      height: "20px"
    }
  }
};

// AppBar initialization
const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="warnakustom"
    pad={{ left: "medium", right: "small", vertical: "medium" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class App extends Component {
  // State
  state = {
    // INSERT YOUR STATE HERE
    showSidebar: false
  };
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={themeone} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              {/* Header */}
              <AppBar>
                <Heading level="3" margin="none">
                  Sample Navbar
                </Heading>
                {/* Button toggle sidebar */}
                <Button
                  icon={<Menu />}
                  onClick={() =>
                    this.setState(prevState => ({
                      showSidebar: !prevState.showSidebar
                    }))
                  }
                />
              </AppBar>
              {/* BODY */}
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  This is a body
                </Box>
                {/* SIDEBAR */}
                {(!showSidebar || size !== "small") ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="light-2"
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      Kool Sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      fill
                      width="medium"
                      background="light-2"
                      align="center"
                      justify="center"
                    >
                    <Button
                    icon={<FormClose/>}
                    onClick={()=> this.setState({showSidebar:false})}
                    />
                      Kool Sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
