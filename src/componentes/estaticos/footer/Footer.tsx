import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box
            style={{
              backgroundColor: "#67727b",
              height: "120px",
              background: "#67727b",
              color: "#F2F2F2",
            }}
            className="footer-container"
          >
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Conheça nossas Redes Sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href=" " target="_blank">
                <GitHubIcon style={{ fontSize: 60, color: "white" }} />
              </a>

              <a href=" " target="_blank">
                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#4e5860", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                © 2020 Copyright
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }

  return <>{footerComponent}</>;
}

export default Footer;
