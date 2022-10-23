.modal-background {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.modal-main {
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
}

.modal-main button.close {
  font-size: 2em;
  background: none;
  border: none;
  position: absolute;
  top: 0em;
  right: 0.2em;
}