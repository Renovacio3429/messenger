import sinon, {
    SinonFakeXMLHttpRequest,
    SinonFakeXMLHttpRequestStatic,
} from 'sinon';
import HTTPTransport from './HTTPTransport';
import { expect } from 'chai';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        };

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests.length = 0;
    });

    it('.get() should send GET request', () => {
        instance.get('/user');

        const [request] = requests;

        expect(request.method).to.eq('GET');
    });

    it('.post() should send POST request', () => {
        const chatNameData = {
            title: 'testChat',
        };

        instance.post('/chats', chatNameData);
        const [request] = requests;

        expect(request.method).to.eq('POST');
    });

    it('.put() should send PUT request', () => {
        const changeUserProfileData = {
            first_name: 'Test',
            second_name: 'Test',
            display_name: 'Test',
            login: 'Testtest',
            email: 'test@test.com',
            phone: '+7912312312',
        };

        instance.put('/user/profile', changeUserProfileData);
        const [request] = requests;

        expect(request.method).to.eq('PUT');
    });

    it('.delete() should send DELETE request', () => {
        const chatIdData = {
            chatId: 0,
        };

        instance.delete('/chats', chatIdData);
        const [request] = requests;

        expect(request.method).to.eq('DELETE');
    });
});
