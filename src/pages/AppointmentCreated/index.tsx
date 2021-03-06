import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  OkButtonText,
  OkButton,
} from './styles';

type AppointmentCreatedRoute = {
  RouteProps: {
    date: number;
  };
};

type RouteParams = RouteProp<AppointmentCreatedRoute, 'RouteProps'>;

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute<RouteParams>();
  const { date } = params;

  const handleOk = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(date, "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'", {
      locale: ptBR,
    });
  }, [date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>

      <OkButton onPress={handleOk}>
        <OkButtonText>OK</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
