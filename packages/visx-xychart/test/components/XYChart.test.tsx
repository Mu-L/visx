import React, { useContext } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { XYChart, DataProvider, DataContext } from '../../src';

const chartProps = {
  xScale: { type: 'linear' },
  yScale: { type: 'linear' },
  width: 100,
  height: 100,
} as const;

describe('<XYChart />', () => {
  let initialResizeObserver: typeof ResizeObserver;
  beforeAll(() => {
    initialResizeObserver = window.ResizeObserver;
    window.ResizeObserver = ResizeObserver;
  });

  afterAll(() => {
    window.ResizeObserver = initialResizeObserver;
  });

  it('should be defined', () => {
    expect(XYChart).toBeDefined();
  });

  it('should render with parent size if width or height is not provided', () => {
    const { getByTestId } = render(
      <div style={{ width: '200px', height: '200px' }} data-testid="wrapper">
        <XYChart {...chartProps} width={undefined}>
          <rect />
        </XYChart>
      </div>,
    );

    const wrapper = getByTestId('wrapper');
    expect(wrapper.firstChild).toHaveStyle('width: 100%; height: 100%');
  });

  it('should throw if DataProvider is not available and no x- or yScale config is passed', () => {
    expect(() =>
      render(
        <XYChart>
          <rect />
        </XYChart>,
      ),
    ).toThrow();
  });

  it('should render an svg', () => {
    const { container } = render(
      <XYChart {...chartProps}>
        <rect />
      </XYChart>,
    );
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should render children', () => {
    const { container } = render(
      <XYChart {...chartProps}>
        <rect id="xychart-child" />
      </XYChart>,
    );
    expect(container.querySelector('#xychart-child')).toBeInTheDocument();
  });

  it('should update the registry dimensions', () => {
    const spy = jest.fn((_) => null);
    const width = 123;
    const height = 456;

    const DataConsumer = () => {
      const data = useContext(DataContext);
      return spy(data);
    };

    render(
      <DataProvider xScale={{ type: 'linear' }} yScale={{ type: 'linear' }}>
        <XYChart width={width} height={height}>
          <DataConsumer />
        </XYChart>
      </DataProvider>,
    );

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        width,
        height,
      }),
    );
  });
});
