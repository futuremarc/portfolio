var Portal = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    propTypes: {
      portal: React.PropTypes.string
    },
    mountPortal: function(portal) {
      var target;
      target = this.resolveTarget(portal);
      this.target = document.createElement('div');
      this.target.style.display = 'inline-block';
      if (target == null) {
        document.body.appendChild(this.target);
      } else {
        target.appendChild(this.target);
      }
      return this.renderPortal(this.target);
    },
    unmountPortal: function(portal) {
      var target;
      target = this.resolveTarget(portal);
      React.unmountComponentAtNode(this.target);
      this.component = null;
      if (target != null) {
        target.removeChild(this.target);
      } else {
        document.body.removeChild(this.target);
      }
      return this.target = null;
    },
    componentDidMount: function() {
      return this.mountPortal(this.props.portal);
    },
    componentWillUnmount: function() {
      return this.unmountPortal(this.props.portal);
    },
    resolveTarget: function(portal) {
      var el;
      if (portal != null) {
        el = document.getElementById(portal);
        if (el == null) {
          throw new Error("Could not find portal with id " + portal + "!");
        }
        return el;
      }
      return null;
    },
    renderPortal: function(target) {
      var el;
      el = React.createElement("div", null, this.props.children);
      return this.component = React.render(el, target);
    },
    updatePortal: function() {
      return this.component.setProps({
        children: this.props.children
      });
    },
    componentDidUpdate: function(prevProps, prevState) {
      if (prevProps.portal === this.props.portal) {
        return this.updatePortal();
      } else {
        this.unmountPortal(prevProps.portal);
        return this.mountPortal(this.props.portal);
      }
    },
    render: function() {
      return null;
    }
  });
