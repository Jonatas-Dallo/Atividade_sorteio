
import React from "react";
import { type } from "os";
import styled from "styled-components";
import Resultado from "../../PartesSeparadas/Resultado"
import Acumulou from "../../PartesSeparadas/Acumulou"
import Data from "../../PartesSeparadas/Data"



const index = () => {
	return (
		<>
			<Direita>
				<Resultado/>
				<Acumulou/>
				<Data/>
			</Direita>
		</>
	);
}

export default index;


const Direita = styled.div`
	margin-left: 50px;

`;