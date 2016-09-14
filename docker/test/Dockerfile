FROM heroku/cedar:14

# ENV HOME /root
# ENV DEBIAN_FRONTEND noninteractive
ENV GITHUB_REPOSITORY https://github.com/RichardIvan/
ENV GITHUB_PROJECT cv

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.2.2

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash \
                && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
# /app/user/node_modules/.bin:$PATH

WORKDIR /app/user
#
#
# # install project dependencies
RUN cd $(npm root -g)/npm \
&& npm install fs-extra \
&& sed -i -e s/graceful-fs/fs-extra/ -e s/fs.rename/fs.move/ ./lib/utils/rename.js

        # # copy project and setup the directory for development
RUN git clone ${GITHUB_REPOSITORY}${GITHUB_PROJECT}.git ${GITHUB_PROJECT}; shopt -s dotglob nullglob; mv ${GITHUB_PROJECT}/* .; rmdir ${GITHUB_PROJECT}

# install project dependencies
RUN npm i ava \
  && npm i nyc \
  # && npm i babel-core \
  && npm i coveralls \
	# && npm i babel-cli \
  && npm i babel-plugin-transform-flow-strip-types

RUN ln -s /usr/local/nvm/versions/node/v6.2.2/bin/node /usr/bin/node

# ADD ./startup.sh /opt/startup.sh

# Start ssh service
# ENTRYPOINT ["/opt/startup.sh"]
CMD cd /app/user/ && npm run dockertest
