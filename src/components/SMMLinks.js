import fb from '../assets/logo-facebook.svg';
import ig from '../assets/logo-instagram.svg';
import lkdn from '../assets/logo-linkedin.svg';
import gh from '../assets/logo-github.svg';

const SMMLinks = () => {
    return (
        <footer>
            <a href='https://www.facebook.com/damzel.deesse/' alt='link to my facebook profile' target='_blank' rel='noopener no referrer'>
                <img src={fb} alt='facebook icon' />
            </a>

            <a href='https://www.instagram.com/deessedesign/' alt='link to my instagram profile' target='_blank' rel='noopener no referrer'>
                <img src={ig} alt='instagram icon' />
            </a>

            <a href='https://www.linkedin.com/in/theresemystere/' alt='link to my linkedin profile' target='_blank' rel='noopener no referrer'>
                <img src={lkdn} alt='linkedIn icon' />
            </a >

            <a href='https://github.com/DamzelDeesse' alt='link to my github profile' target='_blank' rel='noopener no referrer'>
                <img src={gh} alt='github icon' />
            </a >
        </footer >
    );
}

export default SMMLinks;