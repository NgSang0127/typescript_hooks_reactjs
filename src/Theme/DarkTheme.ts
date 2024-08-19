import {createTheme} from "@mui/system";

export const darkTheme=createTheme(
    {
        palette:{
            mode:"dark",
            primary:{
                main:"#FFA62F"
            },
            secondary:{
                main:"#CAF4FF"
            },
            black:{
                main:"#242B2E"
            },
            background:{
                main:"#000000",
                default:"#0D0D0D",
                paper:"#0D0D0D",
            },
            textColor:{
                main:"#111111",

            }
        }
    }
)
