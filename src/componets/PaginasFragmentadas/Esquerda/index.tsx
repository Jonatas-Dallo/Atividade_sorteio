
import React from "react";
import { type } from "os";
import styled from "styled-components";
import NomeLote from '../../PartesSeparadas/NomeLoteria';
import Estimativa from '../../PartesSeparadas/Estimativa';


const index = () => {
	return (
		<>
			<Esquerda>
				<NomeLote />
				<Estimativa/>
			</Esquerda>
		</>
	);
}

export default index;


const Esquerda = styled.div`
`;