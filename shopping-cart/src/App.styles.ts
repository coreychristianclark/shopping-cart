import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled.div`
  margin: 40px;
`; // The back ticks `` indicate nesting for styling.

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;
