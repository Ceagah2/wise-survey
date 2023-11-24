import React from 'react';
import * as S from './styles';
import SurveyImage from '../../assets/survey.png';
import RatingImage from '../../assets/rating.png';
import ListeningImage from '../../assets/listening.png';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/atoms/Container';
import { TNavigationType, ISlideItem } from '../../types';

const slides = [
  {
    key: 'one',
    title: 'Ouça seus clientes!',
    text: 'Saiba como eles se sentem e do que eles gostam.',
    image: ListeningImage,
  },
  {
    key: 'two',
    title: 'Entenda seus clientes!',
    text: 'Saiba o que os deixa contentes e descontentes.',
    image: RatingImage,
  },
  {
    key: 'three',
    title: 'Easy Survey',
    text: `O nosso aplicativo te ajuda a entender 
      o que seus clientes acham do seu atendimento, de forma prática e rápida.`,
    image: SurveyImage,
  },
];

const IntroSlider = () => {
  const navigate = useNavigation<TNavigationType>();

  const onDone = () => {
    navigate.navigate('Home');
  }

  const renderItem = ({ item }: ISlideItem) => (
    <S.Content>
      <S.SliderHeader>
        <S.SliderImage source={item.image} style={{ resizeMode: 'contain' }} />
      </S.SliderHeader>
      <S.SliderFooter>
        <S.SliderTitle>{item.title}</S.SliderTitle>
        <S.SliderDescription>{item.text}</S.SliderDescription>
      </S.SliderFooter>
    </S.Content>
  );

  return (
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        onDone={onDone}
        nextLabel='Próximo'
        prevLabel='Anterior'
        doneLabel="Pronto"
        showDoneButton
      />
  );
};

export default IntroSlider;
