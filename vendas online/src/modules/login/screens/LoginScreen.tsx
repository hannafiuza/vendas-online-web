    import { 
        BackgroundImage,
        ContainerLogin,
        ContainerLoginScreen,
        LimitedContainer,
        LogoImage 
    } from "../styles/loginScreen.styles"
   
    const LoginScreen = () => {
        return (
            <div>
                <BackgroundImage src="./background.png" />

                <ContainerLoginScreen>
                    <ContainerLogin>
                        <LimitedContainer>
                            <LogoImage src="./logo.png" />   
                        </LimitedContainer>
                    </ContainerLogin>
                    <BackgroundImage src="./background.png" />
                </ContainerLoginScreen>
            </div>
     );
    }
    export default LoginScreen;