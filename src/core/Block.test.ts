import sinon from 'sinon';
import proxyquire from 'proxyquire';
import { expect } from 'chai';
import type BlockType from './block';

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
};

const { default: Block } = proxyquire('./Block', {
    './EventBus': {
        default: class {
            emit = eventBusMock.emit;
            on = eventBusMock.on;
        },
    },
}) as { default: typeof BlockType };

describe('Block', () => {
    const template = `<h1>test</h1>`;

    class ComponentMock extends Block {
        public render(): DocumentFragment {
            return this.compile(template, this.props);
        }
    }

    it('should fire init event on initialization', () => {
        new ComponentMock({});

        expect(eventBusMock.emit.calledWith('init')).to.eq(true);
    });

    it('should fire flow:component-did-mount event on dispatchComponentDidMount', () => {
        const mock = new ComponentMock({});
        mock.dispatchComponentDidMount();
        expect(eventBusMock.emit.calledWith('flow:component-did-mount')).to.eq(
            true
        );
    });

    it('should fire flow:render event on init', () => {
        const mock = new ComponentMock({});
        // @ts-ignore
        mock._init();
        expect(eventBusMock.emit.calledWith('flow:render')).to.eq(true);
    });

    it('should fire flow:render event on componentDidUpdate', () => {
        const mock = new ComponentMock({});
        new ComponentMock({});
        // @ts-ignore
        mock._componentDidUpdate();
        expect(eventBusMock.emit.calledWith('flow:render')).to.eq(true);
    });

    it('should fire flow:component-did-update event on set whatever properties', () => {
        const mock = new ComponentMock({});
        // @ts-ignore
        mock.props.testProp = 'test';
        expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(
            true
        );
    });

    it('.setProps() should update properties', () => {
        const test = new ComponentMock({});

        test.setProps({
            testProps: 'testProps',
        });

        // @ts-ignore
        const result = test.props.testProps;

        expect(result).to.eq('testProps');
    });

    it('.render() should be return DocumentFragment', () => {
        const test = new ComponentMock({});
        const documentFragment = test.render();
        expect(documentFragment).to.instanceof(DocumentFragment);
    });
});
