import { Component, ComponentType } from 'react';

import { ReturnAuthenticatedToHome } from './ReturnAuthenticatedToHome';

export function ReturnAuthenticatedToHomeWrapper<Props>(Wrapper: ComponentType<Props>) {
  return class extends Component<Props> {
    constructor(prop: Props | Readonly<Props>) {
      super(prop);
      this.state = {};
    }

    render() {
      return (
        <ReturnAuthenticatedToHome>
          <Wrapper {...this.props} />
        </ReturnAuthenticatedToHome>
      );
    }
  };
}
