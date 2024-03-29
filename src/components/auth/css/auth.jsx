import { Button, styled } from "@mui/material";
import { theme } from "../../../sharedComponents/theme";

export const FormLabel = styled("label")({
    fontWeight: 500,
  });
  
  export const FormDiv = styled("div")({
    display: "flex",
    justifyContent: "space-between",
  });
  export const FormCheckBox = styled("div")({
    marginTop: 15,
    fontWeight: "300",
    fontSize: 17,
    display: "flex",
    alignItems: "center",
  });
  
  export const SubmitButton = styled(Button)({
    width: "100%",
    color: "white",
    textTransform: "none",
    marginTop: 12,
  });
  
  export const FormSubmit = styled("input")({
    width: "100%",
    marginTop: 20,
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "5px",
    fontSize: 18,
    borderRadius: 15,
    cursor: "pointer",
  });

  export const FormResult = styled("small")({
    backgroundColor: theme.palette.info.light,
    color: theme.palette.info.main,
    padding: "1rem",
    borderRadius: 7,
  });

  export const FormDetail = styled("small")({
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    padding: "1rem",
    border: "1px solid red",
    borderRadius: 7,
  });